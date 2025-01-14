import HeadTitle from "../../components/common/title";

const AboutPage = () => {
  return (
    <>
      <HeadTitle title="MUTEX | About" />
      <div className="max-w-screen-lg mx-auto w-full p-4">
        {/* MAIN CONTAINER */}
        <div>
          <hr className="my-12 h-0.5 border-t-0 bg-accent" />

          <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-2 mt-10">
            <img
              src="/img/about-photo.jpg"
              alt="About"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="text-lg leading-relaxed text-foreground">
              <h1 className="text-3xl mb-8">Who am I?</h1>
              <p>
                Hi, I&apos;m <span className="text-accent">Ilya</span>, the
                voice behind MUTEX
                <span className="text-accent">IS</span>. I&apos;m a Senior
                engineer with a knack for exploring data-driven solutions and
                improving productivity through tech.
              </p>
            </div>
          </div>

          <hr className="my-12 h-0.5 border-t-0 bg-accent" />

          <div>
            <span className="italic"> {">>"} SECTION IS IN DEVELOPMENT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
