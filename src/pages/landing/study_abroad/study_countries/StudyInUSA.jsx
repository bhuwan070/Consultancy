import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { study_abroad_data } from "../../../../data/study_abroad_data";

const usa = study_abroad_data.find((item) => item.country === "USA");

export default function StudyInUSA() {
  return (
    <>
      {/* Other sections */}

      <StudyAbroadSection
        country={usa.country}
        imageSrc={usa.imageURL}
        introductionText={usa.introductionText}
        whyCountryText={usa.whyCountryText}
      />
    </>
  );
}
