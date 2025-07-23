import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { test_prep_data } from "../../../../data/test_prep_data";

const ieltsData = test_prep_data.find((item) => item.title === "IELTS");

export default function IELTS() {
  if (!ieltsData) {
    return <div>IELTS data not found.</div>;
  }

  return (
    <StudyAbroadSection
      country={ieltsData.title}
      imageSrc={ieltsData.image}
      introductionText={ieltsData.description}
    />
  );
}
