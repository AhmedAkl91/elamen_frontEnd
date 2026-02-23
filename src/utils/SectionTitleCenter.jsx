export default function TitleCentered({ title, subTitle }) {
  return (
    <div className="section-title text-center mb-10">
      <div className="border-c-bottom">
        <p>{title}</p>
      </div>
      {subTitle ? <h2>{subTitle}</h2> : null}
    </div>
  );
}
