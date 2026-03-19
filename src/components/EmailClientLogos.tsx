// Email client logos - served as static SVG files from /public/logos/

export const EMAIL_CLIENTS = [
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Outlook", logo: "/logos/outlook.svg" },
  { name: "Apple Mail", logo: "/logos/apple-mail.svg" },
  { name: "Yahoo Mail", logo: "/logos/yahoo.svg" },
  { name: "Thunderbird", logo: "/logos/thunderbird.svg" },
  { name: "Outlook Mobile", logo: "/logos/outlook-mobile.svg" },
  { name: "Samsung Mail", logo: "/logos/samsung-mail.svg" },
  { name: "Spark", logo: "/logos/spark.svg" },
];

export function EmailClientGrid() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {EMAIL_CLIENTS.map(({ name, logo }) => (
        <div key={name} className="flex flex-col items-center gap-2 group">
          <img
            src={logo}
            alt={`${name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
