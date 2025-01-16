import {
  FaArrowAltCircleDown,
  FaCode,
  FaDatabase,
  FaToolbox,
} from "react-icons/fa";
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

          <div className="text-lg">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Professionally
            </h1>
            <p>
              I’ve spent years in software engineering, building systems that
              scale, playing with data, and solving IT puzzles. Along the way,
              I’ve learned a lot — and broken a few things (but fixed them, I
              promise).
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-4 underline">
              Essential Tech Stack
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="mr-4">
                  <FaDatabase size={60} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Storage:
                  </h3>
                  <p className="text-foreground">
                    MS SQL, MongoDB, Redis, etcd
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="mr-4">
                  <FaCode size={60} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Languages:
                  </h3>
                  <p className="text-foreground">
                    C#, JavaScript/TypeScript, Python
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="mr-4">
                  <FaToolbox size={60} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Technologies:
                  </h3>
                  <p className="text-foreground">
                    ASP.NET, FastAPI, Next.js, Typesense, Databricks, Spark
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <hr className="my-12 h-0.5 border-t-0 bg-accent" />

          <div className="text-lg mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Personally
            </h1>
            <div className="flex flex-col space-y-4">
              <p>
                Beyond the code, I enjoy music and have a lot of fun with my DJ
                gear, stay active through CrossFit and travel around the world
                with my lovely wife!
              </p>
              <p>
                If you&apos;d like to connect, feel free to reach me using
                social links below!
              </p>
            </div>
          </div>

          <div className="w-full items-center flex text-accent justify-center mb-4">
            <FaArrowAltCircleDown size={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
