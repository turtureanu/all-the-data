import { createSignal } from "solid-js";
import CopyButton from "~/components/CopyButton";

export default function Home() {
  const [searchTerm, setSearchTerm] = createSignal("");

  const data = [
    {
      type: "browser width",
      value: `${window.outerWidth} px`,
      code: "window.innerWidth",
    },
    {
      type: "browser height",
      value: `${window.outerHeight} px`,
      code: "window.innerHeight",
    },
    {
      type: "page width",
      value: `${window.innerWidth} px`,
      code: "window.innerWidth",
    },
    {
      type: "page height",
      value: `${window.innerHeight} px`,
      code: "window.innerHeight",
    },
    {
      type: "user agent",
      value: window.navigator.userAgent,
      code: "window.navigator.userAgent",
    },
  ];
  const filteredData = () => {
    return data.filter(
      (item) =>
        item.type.toLowerCase().includes(searchTerm().toLowerCase()) ||
        item.value.toLowerCase().includes(searchTerm().toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm().toLowerCase())
    );
  };

  return (
    <div class="m-auto px-4 md:max-w-[80%]">
      <h1 class="text-3xl pt-24 pb-2 font-bold font-mono text-center">
        All The Data
      </h1>
      <p class="text-center pb-8">
        interesting things every website <br /> can see about your browser
      </p>
      <div class="mb-4">
        <input
          type="text"
          placeholder="Search "
          class="border-none outline-width-2 outline-offset--2 outline outline-gray-700 rounded-md p-2 w-full text-white bg-transparent"
          onInput={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table class="w-full border-separate border-gray-300">
        <thead>
          <tr>
            <th class="border-2 rounded-md border-transparent outline-gray-500 outline-dashed outline-width-2 outline-offset--4 text-white p-2">
              Type
            </th>
            <th class="border-2 rounded-md border-transparent outline-gray-500 outline-dashed outline-width-2 outline-offset--4 text-white text-white p-2">
              Value
            </th>
            <th class="border-2 rounded-md border-transparent outline-gray-500 outline-dashed outline-width-2 outline-offset--4 text-white text-white p-2 whitespace-nowrap">
              Code Snippet
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData().length !== 0 ? (
            filteredData().map((item) => (
              <tr>
                <td class="border outline outline-width-2 outline-gray-700 outline-offset--4 rounded-md border-transparent p-2 w-max whitespace-nowrap">
                  {item.type}
                </td>
                <td class="border outline outline-width-2 outline-gray-700 outline-offset--4 rounded-md border-transparent p-2 w-full">
                  <CopyButton item={item.value} />
                </td>
                <td class="border outline outline-width-2 outline-gray-700 outline-offset--4 rounded-md border-transparent p-2">
                  <CopyButton item={item.code} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td class="text-center text-4xl w-full pt-48 font-sans">
                ¯\_(ツ)_/¯
              </td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
