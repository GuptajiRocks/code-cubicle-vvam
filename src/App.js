import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Links pushed to Langchain model",
    description:
      "The Links provided by the user is accepted as a valid YT link and then sent to the langchain model, which is then stored in a pinecone vector database, with the key being the course code which the user requires.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Previous Prompt Response",
    description:
      "Since we're using PineCone",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
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
                Summarized Content
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
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
