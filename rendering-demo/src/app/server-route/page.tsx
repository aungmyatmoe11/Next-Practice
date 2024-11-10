import { ImageSlider } from "../components/image-slider";
import { serverSideFunction } from "../utils/server-utils";
// import { clientSideFunction } from "../utils/client-util";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
      {/* <p>{clientResult}</p> */}
      <ImageSlider />
    </>
  );
}