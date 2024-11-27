import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function CopyButton({ item }: { item: string }) {
  return (
    <button
      class="text-white py-1 px-2 rounded-sm text-left hover:bg-green-800"
      onClick={() => {
        navigator.clipboard
          .writeText(item)
          .then(() => {
            Toastify({
              text: "copied",
              position: "right",
              gravity: "top",
              duration: 750,
              style: {
                background: "rgb(22 101 52)",
                boxShadow: "none",
              },
            }).showToast();
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      }}
    >
      {item}
    </button>
  );
}
