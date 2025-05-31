"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  // Basic units
  "bit/second [b/s]": 1,
  "byte/second [B/s]": 8,

  // SI decimal multiples
  "kilobit/second (SI def.)": 1e3,
  "kilobyte/second (SI def.)": 8e3,
  "kilobit/second [kb/s]": 1e3,
  "kilobyte/second [kB/s]": 8e3,
  "megabit/second (SI def.)": 1e6,
  "megabyte/second (SI def.)": 8e6,
  "megabit/second [Mb/s]": 1e6,
  "megabyte/second [MB/s]": 8e6,
  "gigabit/second (SI def.)": 1e9,
  "gigabyte/second (SI def.)": 8e9,
  "gigabit/second [Gb/s]": 1e9,
  "gigabyte/second [GB/s]": 8e9,
  "terabit/second (SI def.)": 1e12,
  "terabyte/second (SI def.)": 8e12,
  "terabit/second [Tb/s]": 1e12,
  "terabyte/second [TB/s]": 8e12,

  // Named speeds (approximate)
  "ethernet": 1e7,             // 10 Mbps Ethernet
  "ethernet (fast)": 1e8,      // 100 Mbps Fast Ethernet
  "ethernet (gigabit)": 1e9,   // 1 Gbps Ethernet

  // OC speeds (Optical Carrier, SONET)
  "OC1": 5.04e7,
  "OC3": 1.544e8,
  "OC12": 6.192e8,
  "OC24": 1.244e9,
  "OC48": 2.488e9,
  "OC192": 9.953e9,
  "OC768": 3.979e10,

  // ISDN
  "ISDN (single channel)": 64e3,
  "ISDN (dual channel)": 128e3,

  // Modems
  "modem (110)": 110,
  "modem (300)": 300,
  "modem (1200)": 1200,
  "modem (2400)": 2400,
  "modem (9600)": 9600,
  "modem (14.4k)": 14400,
  "modem (28.8k)": 28800,
  "modem (33.6k)": 33600,
  "modem (56k)": 56000,

  // SCSI speeds (approximate)
  "SCSI (Async)": 10e6,
  "SCSI (Sync)": 20e6,
  "SCSI (Fast)": 40e6,
  "SCSI (Fast Ultra)": 80e6,
  "SCSI (Fast Wide)": 40e6,
  "SCSI (Fast Ultra Wide)": 80e6,
  "SCSI (Ultra-2)": 160e6,
  "SCSI (Ultra-3)": 320e6,
  "SCSI (LVD Ultra80)": 80e6,
  "SCSI (LVD Ultra160)": 160e6,

  // IDE speeds (PIO and DMA modes, approximate)
  "IDE (PIO mode 0)": 3.3e6,
  "IDE (PIO mode 1)": 5.2e6,
  "IDE (PIO mode 2)": 8.3e6,
  "IDE (PIO mode 3)": 11.1e6,
  "IDE (PIO mode 4)": 16.6e6,
  "IDE (DMA mode 0)": 4.2e6,
  "IDE (DMA mode 1)": 13.3e6,
  "IDE (DMA mode 2)": 16.6e6,
  "IDE (UDMA mode 0)": 16.6e6,
  "IDE (UDMA mode 1)": 25e6,
  "IDE (UDMA mode 2)": 33e6,
  "IDE (UDMA mode 3)": 44e6,
  "IDE (UDMA mode 4)": 66e6,
  "IDE (UDMA-33)": 33e6,
  "IDE (UDMA-66)": 66e6,

  // Other interfaces
  "USB": 12e6,
  "firewire (IEEE-1394)": 400e6,

  // T-carrier and E-carrier systems
  "T0 (payload)": 1.544e6,
  "T0 (B8ZS payload)": 1.544e6,
  "T1 (signal)": 1.544e6,
  "T1 (payload)": 1.544e6,
  "T1Z (payload)": 1.544e6,
  "T1C (signal)": 1.544e6,
  "T1C (payload)": 1.544e6,
  "T2 (signal)": 6.312e6,
  "T3 (signal)": 4.488e7,
  "T3 (payload)": 4.488e7,
  "T3Z (payload)": 4.488e7,
  "T4 (signal)": 3.1e8,

  // EPTA signals and payloads
  "E.P.T.A. 1 (signal)": 2.048e6,
  "E.P.T.A. 1 (payload)": 2.048e6,
  "E.P.T.A. 2 (signal)": 8.448e6,
  "E.P.T.A. 2 (payload)": 8.448e6,
  "E.P.T.A. 3 (signal)": 34.368e6,
  "E.P.T.A. 3 (payload)": 34.368e6,

  // H series
  "H0": 384e3,
  "H11": 1536e3,
  "H12": 1920e3,

  // Virtual Tributaries
  "Virtual Tributary 1 (signal)": 1.544e6,
  "Virtual Tributary 1 (payload)": 1.544e6,
  "Virtual Tributary 2 (signal)": 3.088e6,
  "Virtual Tributary 2 (payload)": 3.088e6,
  "Virtual Tributary 6 (signal)": 9.264e6,
  "Virtual Tributary 6 (payload)": 9.264e6,

  // STS signals
  "STS1 (signal)": 4.976e7,
  "STS1 (payload)": 4.976e7,
  "STS3 (signal)": 1.493e8,
  "STS3 (payload)": 1.493e8,
  "STS3c (signal)": 1.492e8,
  "STS3c (payload)": 1.492e8,
  "STS12 (signal)": 5.972e8,
  "STS24 (signal)": 1.194e9,
  "STS48 (signal)": 2.388e9,
  "STS192 (signal)": 9.554e9,

  // STM signals
  "STM-1 (signal)": 4.976e7,
  "STM-4 (signal)": 1.993e8,
  "STM-16 (signal)": 7.972e8,
  "STM-64 (signal)": 3.189e9,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const DataTransferConverter = () => (
  <ReusableConverter heading="Data Transfer Converter" units={Object.keys(units)} convert={convert} />
);

export default DataTransferConverter;
