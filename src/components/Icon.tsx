export interface Props {
  image: string;
  logo?: string;
  linkName?: string;
  width?: number;
}
export default function Icon({ image, logo, linkName, width }: Props) {
  return (
    <div className="">
      <img
        src={image}
        className="icon uk-animation-scale-up"
        alt="logo"
        width={200}
        style={{ padding: "0 20px" }}
      />
      <div className="uk-text-center uk-text-bold">{linkName}</div>
    </div>
  );
}
