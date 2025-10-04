import Table from "@/components/Table";

export default function Productioncapabilites() {
  const headers = [
    { name: "Serial No.", icon: "/images/machine-icon-1.png" },
    { name: "Machine Type", icon: "/images/machine-icon-2.png" },
    { name: "No. of Machine", icon: "/images/machine-icon-3.png" },
    { name: "Make", icon: "/images/machine-icon-4.png" },
  ];

  const rows = [
    {
      "Serial No.": "1",
      "Machine Type": "Injection moulding machine 1250 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "2",
      "Machine Type": "Injection moulding machine 1120 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "3",
      "Machine Type": "Injection moulding machine  1000 ton",
      "No. of Machine": "1",
      Make: "JSW",
    },
    {
      "Serial No.": "4",
      "Machine Type": "Injection moulding machine  850ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "5",
      "Machine Type": "Injection moulding machine 680 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "6",
      "Machine Type": "Injection moulding machine 560 ton",
      "No. of Machine": "9",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "7",
      "Machine Type": "Injection moulding machine  500 ton",
      "No. of Machine": "4",
      Make: "JSW",
    },
    {
      "Serial No.": "8",
      "Machine Type": "Injection moulding machine  480 ton",
      "No. of Machine": "4",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "9",
      "Machine Type": "Injection moulding machine 450 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "10",
      "Machine Type": "Injection moulding machine 400 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "11",
      "Machine Type": "Injection moulding machine 350 ton",
      "No. of Machine": "2",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "12",
      "Machine Type": "Injection moulding machine 250 ton",
      "No. of Machine": "2",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "13",
      "Machine Type": "Injection moulding machine 150 ton",
      "No. of Machine": "6",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "14",
      "Machine Type": "Injection moulding machine 120 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "15",
      "Machine Type": "DGSET 600 KVA",
      "No. of Machine": "3",
      Make: "KIRLOSKAR & CATER PILAR",
    },
  ];

  const headers2 = [
    { name: "Serial No.", icon: "/images/machine-icon-1.png" },
    { name: "Machine Type", icon: "/images/machine-icon-2.png" },
    { name: "No. of Machine", icon: "/images/machine-icon-3.png" },
    { name: "Size", icon: "/images/machine-icon-5.png" },
  ];

  const rows2 = [
    {
      "Serial No.": "1",
      "Machine Type": "SHAPE MOULDING MACHINE",
      "No. of Machine": "6",
      Size: "1200 x 1400",
    },
    {
      "Serial No.": "2",
      "Machine Type": "SHAPE MOULDING MACHINE",
      "No. of Machine": "19",
      Size: "1750 x 1500",
    },
    {
      "Serial No.": "3",
      "Machine Type": "PREFORM MACHINE",
      "No. of Machine": "2",
      Size: "15 & 12 Ton",
    },
    {
      "Serial No.": "4",
      "Machine Type": "COMPRESSOR",
      "No. of Machine": "4",
      Size: "100 HP",
    },
    {
      "Serial No.": "5",
      "Machine Type": "DG SET",
      "No. of Machine": "1",
      Size: "500 KVA",
    },
    {
      "Serial No.": "6",
      "Machine Type": "Boiler",
      "No. of Machine": "2",
      Size: "10Ton",
    },
  ];

  return (
    <section
      aria-labelledby="machine-heading"
      className="relative w-full py-20 px-6 bg-black text-white"
    >
      <Table title="Production Capabilities" headers={headers} rows={rows} />
      <Table title="EPS Shape Moulding" headers={headers2} rows={rows2} />
    </section>
  );
}
