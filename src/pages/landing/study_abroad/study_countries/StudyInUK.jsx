import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { study_abroad_data } from "../../../../data/study_abroad_data";

const uk = study_abroad_data.find((item) => item.country === "UK");

export default function StudyInUK() {
  return (
    <>
      {/* Other sections */}

      <StudyAbroadSection
        country={uk.country}
        imageSrc={uk.imageURL}
        introductionText={uk.introductionText}
        whyCountryText={uk.whyCountryText}
      />
    </>
  );
}
