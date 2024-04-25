import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#ccc1c1", "#d04623", "#e18122", "#acdd3b", "#69c675"]}
      />
    </>
  );
}
