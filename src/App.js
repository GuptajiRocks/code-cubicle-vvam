import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Solution",
    description:
      "Currently in the market, no free and open source products are available to effectively summarise YT videos. Our product does that and helps users Generate precise content out of their YT videos with the help of Langchain model.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Phase 1 progress.",
    description:
      "Frontend prototype built in NextJS and React components, display and input functionalities built and works excellent on standalone deployment.\n" +
        "\n" +
        "Backend model works best standalone as well with the POST request working on Pinecone model and Langchain  AI with the input being the YT video and the output being the summary.\n" +
        "GET AND POST requests are working fine with key mapping in the pinecone as well.",
    icon: LockClosedIcon,
  },
  {
    name: "Business Opportunities",
    description:
      "Since the market is currently lacking free YouTube video summarisers, our product pertains to the demographic of students and developers who can tweak and work and build upon the software without worrying about uncessary pricing problems.\n" +
        "\n" +
        "When the product reaches a certain popularity and active users, we can capitalise on the pre built audience and generate additional revenue streams.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Engagement enhancer
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Problem Statement
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Having multiple Youtube videos to watch, when there is a time constraint can be a tough task. Since the inception of AI it has become feasible to do stuff that wasn't achievable before. Here comes into play our freely available Youtube video summariser and course generator.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* const VideoSummarizer = () => {
  const [videoLink, setVideoLink] = useState('https://www.youtube.com/embed/tJJSNUQlabY');

  const updateVideo = () => {
    const videoId = videoLink.split('v=')[1];
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    setVideoLink(embedLink);
  }; */}
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              backgroundColor: "#f9fafb",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>YouTube Video</h2>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: "0",
                overflow: "hidden",
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "#000",
                marginBottom: "20px",
              }}
            >
              {/* <iframe
                id="video"
                src={videoLink}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              /> */}
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              {/* <input
                type="text"
                placeholder="Put your link here"
                // onChange={(e) => setVideoLink(e.target.value)}
                style={{
                  flex: "1",
                  padding: "10px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px 0 0 4px",
                }}
              /> */}
              {/* <button
                //onClick={updateVideo}
                style={{
                  padding: "10px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  cursor: "pointer",
                }}
              >  
                Summarize
              </button> */}
            </div>
            <div style={{ fontSize: "16px" }}>
              <p>
                <span style={{ fontWeight: "bold" }}>Title:</span> TypeScript
                Origins: The Documentary
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Author:</span> OfferZen
                Origins
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Video Duration:</span> 00
                mins 00 secs
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Read Time:</span> 1 min 15
                secs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
