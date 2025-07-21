import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";
import { services_data } from "../../../../data/services_data";
import { study_abroad_data } from "../../../../data/study_abroad_data";
import OurServices from "../../../../components/client/ourservices/OurServices";

export default function CareerCounselling() {
  const careerOnly = services_data.filter(
    (item) => item.title === "Career Counselling"
  );

  return (
    <>
      <OurServices data={careerOnly} title="Career Counselling Service" />
    </>
  );
}
