export function TitleCentered({ title, subTitle }) {
  return (
    <div className="sec-title text-center">
      <span className="sub-title">{title}</span>

      {subTitle ? <h2>{subTitle}</h2> : null}

      <span className="divider">{ }</span>
    </div>
  );
}
