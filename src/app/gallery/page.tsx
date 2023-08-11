import UploadButton from "./upload-button";
import { CldImage } from "next-cloudinary";
import getResults from "./getResults";
import { SearcResult } from "./getResults";
import ImagesList from "./ImagesList";
type Props = {};

const page = async (props: Props) => {
  const results = await getResults();
  return (
    <section className="">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font bold">Gallery</h1>
        <UploadButton />
      </div>
      <ImagesList results={results.resources} />
    </section>
  );
};

export default page;
