import cloudinary from "cloudinary";
export type SearcResult = {
  public_id: string;
};

const getResults = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as {
    resources: SearcResult[];
  };
  return results;
};
export default getResults;
