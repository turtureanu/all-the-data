import { createSignal } from "solid-js";
import CopyButton from "~/components/CopyButton";

import { Icon } from '@iconify-icon/solid';

export default function Home() {
  const [searchTerm, setSearchTerm] = createSignal("");
  const data = [
    {
      type: "browser width",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth",
      value: `${window.outerWidth} px`,
      code: "window.outerWidth",
    },
    {
      type: "browser height",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight",
      value: `${window.outerHeight} px`,
      code: "window.outerHeight",
    },
    {
      type: "page width",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth",
      value: `${window.innerWidth} px`,
      code: "window.innerWidth",
    },
    {
      type: "page height",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight",
      value: `${window.innerHeight} px`,
      code: "window.innerHeight",
    },
    {
      type: "user agent",
      ref: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",
      value: window.navigator.userAgent,
      code: "window.navigator.userAgent",
    },
    {
      type: "pixel ratio",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",
      value: window.devicePixelRatio,
      code: "window.devicePixelRatio",
    },
    {
      type: "window opener",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Window/opener",
      value: window.opener ? window.opener : "N/A",
      code: "window.opener",
    },
    {
      type: "screen width",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Screen/width",
      value: `${screen.width} px`,
      code: "screen.width",
    },
    {
      type: "screen height",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Screen/height",
      value: `${screen.height} px`,
      code: "screen.height",
    },
    {
      type: "color depth",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth",
      value: `${screen.colorDepth} bits`,
      code: "screen.colorDepth",
    },
    {
      type: "available screen width",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth",
      value: `${screen.availWidth} px`,
      code: "screen.availWidth",
    },
    {
      type: "available screen height",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight",
      value: `${screen.availHeight} px`,
      code: "screen.availHeight",
    },
    {
      type: "timezone",
      ref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions",
      value: Intl.DateTimeFormat().resolvedOptions().timeZone,
      code: "Intl.DateTimeFormat().resolvedOptions().timeZone",
    },
    {
      type: "language",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language",
      value: navigator.language || navigator.userLanguage,
      code: "navigator.language || navigator.userLanguage",
    },
    {
      type: "platform",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform",
      value: navigator.platform,
      code: "navigator.platform",
    },
    {
      type: "online status",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine",
      value: navigator.onLine ? "Online" : "Offline",
      code: "navigator.onLine",
    },
    {
      type: "cookie enabled",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled",
      value: navigator.cookieEnabled ? "Yes" : "No",
      code: "navigator.cookieEnabled",
    },
    {
      type: "hardware concurrency",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency",
      value: navigator.hardwareConcurrency,
      code: "navigator.hardwareConcurrency",
    },
    {
      type: "max touch points",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/maxTouchPoints",
      value: navigator.maxTouchPoints,
      code: "navigator.maxTouchPoints",
    },
    {
      type: "device memory",
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory",
      value: navigator.deviceMemory ? navigator.deviceMemory + " GB" : "N/A",
      code: "navigator.deviceMemory",
    },
  ];



  const filteredData = () => {
    return data.filter(
      (item) =>
        item.type.toString().toLowerCase().includes(searchTerm().toLowerCase()) ||
        item.value.toString().toLowerCase().includes(searchTerm().toLowerCase()) ||
        item.code.toString().toLowerCase().includes(searchTerm().toLowerCase())
    );
  };

  return (
    <div class="m-auto px-4 md:max-w-[80%] text-sm">
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
          class="border-none outline-width-2 outline-offset--4 outline outline-gray-700 rounded-md py-2.5 px-4 w-full text-white bg-transparent"
          onInput={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table class="w-full border-separate border-gray-300 overflow-x-auto">
        <thead>
          <tr>
            <th class="border-2 rounded-md border-transparent outline-gray-500 outline-dashed outline-2 outline-offset-[-4px] text-white p-2">
              Type
            </th>
            <th class="border-2 rounded-md border-transparent outline-gray-500 outline-dashed outline-2 outline-offset-[-4px] text-white p-2">
              Value
            </th>
            <th class="border-2 rounded-md border-transparent outline-gray-500 outline-dashed outline-2 outline-offset-[-4px] text-white p-2 whitespace-nowrap">
              Code Snippet
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData().length !== 0 ? (
            filteredData().map((item) => (
              <tr>
                <td class="border outline outline-2 outline-gray-700 outline-offset-[-4px] rounded-md border-transparent p-2 break-words">
                  {item.ref ? (
                    <a
                      href={item.ref}
                      class="underline underline-offset-5 underline-dashed"
                      target="_blank"
                    >
                      <span class="mr-1">{item.type}</span>
                    </a>
                  ) : (
                    item.type
                  )}
                </td>
                <td class="border outline outline-2 outline-gray-700 outline-offset-[-4px] rounded-md border-transparent p-2 break-all">
                  <CopyButton item={item.value} />
                </td>
                <td class="border outline outline-2 outline-gray-700 outline-offset-[-4px] rounded-md border-transparent p-2">
                  <CopyButton item={item.code} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td class="text-center text-4xl pt-48 font-sans">
                ¯\_(ツ)_/¯
              </td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      <div class="px-2 py-4 flex flex-col gap-y-3">
        <p>created in <a class="underline" href="https://www.solidjs.com/">SolidJS</a> with patience and curiosity by <a class="underline" href="https://github.com/turtureanu" target="_blank">@turtureanu</a> as a proof of concept for <a class="underline" target="_blank" href="https://highseas.hackclub.com/">High Seas</a></p>
        <p>feel free to add more stuff and open a pull request: <a class="underline" href="https://github.com/turtureanu/all-the-data" target="_blank">https://github.com/turtureanu/all-the-data</a></p>
        <p>this project is licensed under the <a class="underline" target="_blank" href="https://github.com/turtureanu/all-the-data?tab=AGPL-3.0-1-ov-file#readme">AGPLv3</a></p>
      </div>
    </div>
  );
}
