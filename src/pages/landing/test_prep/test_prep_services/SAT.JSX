import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { test_prep_data } from "../../../../data/test_prep_data";

const satData = test_prep_data.find((item) => item.title === "SAT");

export default function IELTS() {
  if (!satData) {
    return <div>SAT data not found.</div>;
  }

  return (
    <StudyAbroadSection
      country={satData.title}
      imageSrc={satData.image}
      introductionText={satData.description}
    />
  );
}
