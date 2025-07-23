import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { test_prep_data } from "../../../../data/test_prep_data";

const gmatData = test_prep_data.find((item) => item.title === "GMAT");

export default function GMAT() {
  if (!gmatData) {
    return <div>GMAT data not found.</div>;
  }

  return (
    <StudyAbroadSection
      country={gmatData.title}
      imageSrc={gmatData.image}
      introductionText={gmatData.description}
    />
  );
}
