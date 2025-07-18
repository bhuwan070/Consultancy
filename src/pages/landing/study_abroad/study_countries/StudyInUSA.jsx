import StudyAbroadSection from "../../../../components/client/studyabroad/StudyAbroadSection";

const introText = `Studying abroad opens up a world of new experiences, knowledge, and career opportunities.
We help you navigate the entire process from choosing the right program to settling abroad.`;

const whyCountryText = `The country offers world-class education, vibrant culture, and excellent research facilities.
It's known for its student-friendly environment and post-study work options.`;

const imageURL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

export default function StudyInUSA() {
  return (
    <>
      {/* Other sections */}

      <StudyAbroadSection
        country={"USA"}
        imageSrc={imageURL}
        introductionText={introText}
        whyCountryText={whyCountryText}
      />
    </>
  );
}