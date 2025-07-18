import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { study_abroad_data } from "../../../../data/study_abroad_data";

const japan = study_abroad_data.find((item) => item.country === "Japan");

export default function StudyInJapan() {
  return (
    <>
      {/* Other sections */}

      <StudyAbroadSection
        country={japan.country}
        imageSrc={japan.imageURL}
        introductionText={japan.introductionText}
        whyCountryText={japan.whyCountryText}
      />
    </>
  );
}
