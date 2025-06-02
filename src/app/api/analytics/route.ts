import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const KEYFILEPATH = path.join(process.cwd(), "ga4-key.json");
    if (!fs.existsSync(KEYFILEPATH)) {
      throw new Error("ga4-key.json not found");
    }
    const credentials = JSON.parse(fs.readFileSync(KEYFILEPATH, "utf-8"));

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
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const todayStr = currentDate.toISOString().split('T')[0];

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
          { name: "eventName" }
        ],
        metrics: [{ name: "eventCount" }],
        orderBys: [
          {
            dimension: {
              dimensionName: "date",
              orderType: "NUMERIC"
            }
          }
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