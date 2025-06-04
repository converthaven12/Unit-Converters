import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const base64 = process.env.GA4_KEY_BASE64;
    if (!base64) throw new Error("Missing GA4_KEY_BASE64 env var");

    const credentials = JSON.parse(
      Buffer.from(base64, "base64").toString("utf-8")
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analyticsDataClient = google.analyticsdata({
      version: "v1beta",
      auth,
    });

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Fetch all events data with breakdown by event name
    const eventsResponse = await analyticsDataClient.properties.runReport({
      property: `properties/491304138`,
      requestBody: {
        dateRanges: [
          {
            startDate: `${currentYear}-01-01`,
            endDate: "today",
          },
        ],
        dimensions: [
          { name: "date" },
          { name: "eventName" },
        ],
        metrics: [{ name: "eventCount" }],
        orderBys: [
          {
            dimension: {
              dimensionName: "date",
              orderType: "NUMERIC",
            },
          },
        ],
      },
    });

    // Fetch session data separately
    const sessionsResponse = await analyticsDataClient.properties.runReport({
      property: `properties/491304138`,
      requestBody: {
        dateRanges: [
          {
            startDate: `${currentYear}-01-01`,
            endDate: "today",
          },
        ],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "sessions" }],
      },
    });

    return NextResponse.json({
      sessions: sessionsResponse.data,
      events: eventsResponse.data,
    });
  } catch (error: any) {
    console.error("Analytics API error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
