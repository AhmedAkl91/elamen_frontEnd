export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="sec-title">
      <span className="sub-title">{title}</span>

      {subTitle ? <h2>{subTitle}</h2> : ''}

      <span className="divider">{ }</span>
    </div>
  );
}
