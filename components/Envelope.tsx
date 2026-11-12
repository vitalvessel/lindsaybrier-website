type EnvelopeProps = {
  open?: boolean;
  className?: string;
};

export function Envelope({ open = false, className }: EnvelopeProps) {
  const classes = ["envelope", className].filter(Boolean).join(" ");

  return (
    <div
      className={classes}
      data-open={open ? "true" : "false"}
      aria-hidden="true"
    >
      <div className="envelope-shadow" />
      <div className="envelope-scene">
        <div className="sheet">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="pocket" />
        <div className="flap">
          <div className="flap-face flap-front" />
          <div className="flap-face flap-back" />
        </div>
        <img
          className="seal"
          src="/images/wax-seal.webp"
          alt=""
          width={669}
          height={682}
        />
      </div>
    </div>
  );
}
