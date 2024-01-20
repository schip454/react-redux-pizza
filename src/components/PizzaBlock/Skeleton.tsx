import { FC } from "react";
import ContentLoader from "react-content-loader";

const Skeleton: FC = (props: any) => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="134" cy="136" r="125" />
      <rect x="0" y="296" rx="10" ry="10" width="280" height="20" />
      <rect x="0" y="336" rx="10" ry="10" width="280" height="88" />
      <rect x="1" y="455" rx="10" ry="10" width="95" height="30" />
      <rect x="122" y="445" rx="10" ry="10" width="152" height="45" />
    </ContentLoader>
  );
};

export default Skeleton;
