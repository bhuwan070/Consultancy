import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { test_prep_data } from "../../../../data/test_prep_data";

const pteData = test_prep_data.find((item) => item.title === "PTE");

export default function GMAT() {
  if (!pteData) {
    return <div>PTE data not found.</div>;
  }

  return (
    <StudyAbroadSection
      country={pteData.title}
      imageSrc={pteData.image}
      introductionText={pteData.description}
    />
  );
}
