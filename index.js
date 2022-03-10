const bannerImage1 = $("[id=banner-image-1]");
const bannerImage2 = $("[id=banner-image-2]");
const bannerImage3 = $("[id=banner-image-3]");

bannerImage1.attr(
  "src",
  "https://firebasestorage.googleapis.com/v0/b/the-round-table-ffc3f.appspot.com/o/e-commerce%2F3tjqbvegncd51.jpg?alt=media&token=cb996e18-ad37-44ec-bea0-566f58087151"
);
bannerImage2.attr(
  "src",
  "https://firebasestorage.googleapis.com/v0/b/the-round-table-ffc3f.appspot.com/o/e-commerce%2Fvjymllspwlf51.jpg?alt=media&token=7ee7b58b-f921-42a3-b440-965f884a9a19"
);
bannerImage3.attr(
  "src",
  "https://firebasestorage.googleapis.com/v0/b/the-round-table-ffc3f.appspot.com/o/e-commerce%2Fgdbt3pipmyf51.jpg?alt=media&token=abcd7ac2-d4a9-4526-99e1-1ead51de2ec7"
);
const products = $("#products");

for (i = 1; i <= 12; i++) {
  products.append(`<a
  class="group bg-gray-200 p-5 rounded-lg hover:-translate-y-0.5 transition"
>
  <div
    class="mb-10 w-full rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-9"
  >
    <img
      class="object-center object-cover group-hover:opacity-75 transition"
    />
  </div>
  <div class="sm:flex">
    <div>
      <h3 class="mt-4 text-sm text-gray-700">Keyboard ${i}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">69$</p>
    </div>
    <button
      class="mt-5 ml-auto bg-purple-600 px-4 py-2 rounded-md font-semibold text-center text-gray-100 transform hover:-translate-y-0.5 hover:bg-purple-500 transition duration-200"
    >
      Buy now
    </button>
  </div>
</a>`);
}

const productsImg = $("#products img").attr(
  "src",
  "https://firebasestorage.googleapis.com/v0/b/the-round-table-ffc3f.appspot.com/o/e-commerce%2F0xx4525d9xg51%20(1).jpg?alt=media&token=82799bc3-d902-46ac-ae15-4a6cf56a60eb"
);
