import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { study_abroad_data } from "../../../../data/study_abroad_data";

const canada = study_abroad_data.find((item) => item.country === "Canada");

export default function StudyInCanada() {
  return (
    <>
      {/* Other sections */}

      <StudyAbroadSection
        country={canada.country}
        imageSrc={canada.imageURL}
        introductionText={canada.introductionText}
        whyCountryText={canada.whyCountryText}
      />
    </>
  );
}
