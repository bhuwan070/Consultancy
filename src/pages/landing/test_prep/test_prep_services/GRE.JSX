import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { test_prep_data } from "../../../../data/test_prep_data";

const greData = test_prep_data.find((item) => item.title === "GRE");

export default function GRE() {
  if (!greData) {
    return <div>GRE data not found.</div>;
  }

  return (
    <StudyAbroadSection
      country={greData.title}
      imageSrc={greData.image}
      introductionText={greData.description}
    />
  );
}
