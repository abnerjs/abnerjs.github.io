/** biome-ignore-all lint/a11y/noSvgWithoutTitle: decorative */
export const DownloadIcon = ({ className }: React.SVGProps<SVGSVGElement>) => {
  const arrowPath =
    "M11.625 15.513q-.175-.063-.325-.213l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062t-.375-.062";
  const basePath =
    "M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="currentColor" d={basePath}></path>

      <clipPath id="download-arrow-clip">
        <rect x="-24" y="-24" width="72" height="40" />
      </clipPath>

      <g clipPath="url(#download-arrow-clip)">
        <g className="transition-none group-hover:transition-transform duration-300 group-hover:translate-y-full">
          <rect width="24" height="24" fill="transparent" />
          <path fill="currentColor" d={arrowPath}></path>
        </g>
        <g transform="translate(0, -24)">
          <g className="transition-none duration-300 group-hover:translate-y-full group-hover:transition-transform">
            <rect width="24" height="24" fill="transparent" />
            <path fill="currentColor" d={arrowPath}></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
