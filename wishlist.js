const wishlistItems = [
  {
    id: "nylabone-puppy-pack-pink",
    category: "puppy",
    name: "nylabone puppy pack - pink",
    price: "9.99",
    link: "https://www.amazon.com/gp/product/B06XCNCCGK/ref=ox_sc_act_title_2?smid=ATVPDKIKX0DER&psc=1",
    substitute: "no"
  },
  {
    id: "buddy-butter-pack",
    category: "puppy",
    name: "buddy butter pack",
    price: "34.97",
    link: "https://www.amazon.com/gp/product/B088F67JWR/ref=ox_sc_act_title_3?smid=A20YX7EATSY2CT&psc=1",
    substitute: "yes"
  },
  {
    id: "vetriscience-spine-supplement",
    category: "puppy",
    name: "vetriscience spine supplement",
    price: "28.49",
    link: "https://www.amazon.com/gp/product/B0002TR5SO/ref=ox_sc_act_title_7?smid=ATVPDKIKX0DER&psc=1",
    substitute: "no"
  },
  {
    id: "freeze-dried-quail-eggs",
    category: "puppy",
    name: "freeze dried quail eggs",
    price: "15.19",
    link: "https://www.amazon.com/gp/product/B0D31MDM44/ref=ox_sc_act_title_8?smid=A1L1IO3J58I65U&psc=1",
    substitute: "yes"
  },
  {
    id: "lick-mats-set-of-2",
    category: "puppy",
    name: "lick mats set of 2",
    price: "7.99",
    link: "https://www.amazon.com/gp/product/B0CYBZN22H/ref=ox_sc_act_title_9?smid=A30OZYGTK2ZKSZ&psc=1",
    substitute: "yes, cute colors only"
  },
  {
    id: "washable-bed-pads",
    category: "puppy",
    name: "washable bed pads",
    price: "21.23",
    link: "https://www.amazon.com/gp/product/B0B6PW9XF3/ref=ox_sc_act_title_10?smid=A3AQP8TDYVYCGL&psc=1",
    substitute: "maybe, needs one that covers a lot of space and does NOT have the dog pee enzyme that encourages them to pee there"
  },
  {
    id: "pupford-freeze-dried-training-treats-for-dogs-puppies",
    category: "puppy",
    name: "pupford freeze dried training treats for dogs/puppies",
    price: "16.89",
    link: "https://www.amazon.com/gp/product/B0817PTT86/ref=ox_sc_act_title_17?smid=A3UR6C2I6YJ6LG&psc=1",
    substitute: "yes, the smaller the better! I don't know what she will like yet so I want to make sure I have a variety so she doesn't get picky"
  },
  {
    id: "dog-chew-toys-pack-of-6",
    category: "puppy",
    name: "dog chew toys pack of 6",
    price: "13.99",
    link: "https://www.amazon.com/gp/product/B0CKXD7ZG9/ref=ox_sc_act_title_18?smid=A7CXTXXS4039D&psc=1",
    substitute: "yes, but purple and small!"
  },
  {
    id: "dog-water-bottle-and-food-container-for-travel",
    category: "puppy",
    name: "dog water bottle and food container for travel",
    price: "15.98",
    link: "https://www.amazon.com/gp/product/B0C7WJ989H/ref=ox_sc_act_title_19?smid=A17K99WYQ9E3ZU&psc=1",
    substitute: "yes, but I like this one bc it purple"
  },
  {
    id: "ceramic-slow-feeder",
    category: "puppy",
    name: "ceramic slow feeder",
    price: "16.99",
    link: "https://www.amazon.com/gp/product/B0BVR4RK3Y/ref=ox_sc_act_title_19?smid=A4V8PMCN6ZR8V&psc=1",
    substitute: "yes, PLEASE!! This is so expensive but I want a slow feeder that is purple"
  },
  {
    id: "ceramic-dog-bowl",
    category: "puppy",
    name: "ceramic dog bowl",
    price: "15.99",
    link: "https://www.amazon.com/gp/product/B09VNM8N2V/ref=ox_sc_act_title_22?smid=A1LDKA1F0NX5J5&psc=1",
    substitute: "yes, PLEASE!! This is so expensive but I want a water bowl that is purple"
  },
  {
    id: "purple-dog-harness-xxs",
    category: "puppy",
    name: "purple dog harness xxs",
    price: "16.99",
    link: "https://www.amazon.com/gp/product/B0BYCPH797/ref=ox_sc_act_title_23?smid=A3G474Z3NV2OPA&psc=1",
    substitute: "yes, purple please!"
  },
  {
    id: "purple-princess-dress",
    category: "puppy",
    name: "purple princess dress",
    price: "12.99",
    link: "https://www.amazon.com/gp/product/B0DZNK9GC3/ref=ox_sc_act_title_24?smid=A2E4DNNEK65BS3&psc=1",
    substitute: "yes"
  },
  {
    id: "purple-floral-dress",
    category: "puppy",
    name: "purple floral dress",
    price: "9.99",
    link: "https://www.amazon.com/gp/product/B0G7KN66WY/ref=ox_sc_act_title_23?smid=A20BWK8A68Q4OF&psc=1",
    substitute: "yes"
  },
  {
    id: "purple-bows",
    category: "puppy",
    name: "purple bows",
    price: "6.65",
    link: "https://www.amazon.com/gp/product/B0F29JS5D5/ref=ox_sc_act_title_26?smid=A2EH28HICBIRPQ&psc=1",
    substitute: "yes"
  },
  {
    id: "dog-toothpaste",
    category: "puppy",
    name: "dog toothpaste",
    price: "11.89",
    link: "https://www.amazon.com/gp/product/B004ULYZ5Q/ref=ox_sc_act_title_27?smid=ATVPDKIKX0DER&psc=1",
    substitute: "no"
  },
  {
    id: "dog-purse-carrier-beige",
    category: "puppy",
    name: "dog purse carrier (beige)",
    price: "42.99",
    link: "https://www.amazon.com/gp/product/B0BR3F1K75/ref=ox_sc_act_title_27?smid=A110HIPEHW3O86&psc=1",
    substitute: "yes, neutral colors pls"
  },
  {
    id: "puppy-shampoo-and-conditioner",
    category: "puppy",
    name: "puppy shampoo & conditioner",
    price: "32.99",
    link: "https://www.amazon.com/gp/product/B0713WKGGG/ref=ox_sc_act_title_29?smid=A1O9I0PFIHK5TL&psc=1",
    substitute: "no"
  },
  {
    id: "pee-enzyme-remover",
    category: "puppy",
    name: "pee enzyme remover",
    price: "12.72",
    link: "https://www.amazon.com/gp/product/B09KQVCC67/ref=ox_sc_act_title_33?smid=ATVPDKIKX0DER&psc=1",
    substitute: "yes"
  },
  {
    id: "real-grass-for-the-dog-to-potty-on-lol-need-1-2",
    category: "puppy",
    name: "real grass for the dog to potty on lol (need 1-2)",
    price: "33.95",
    link: "https://www.amazon.com/gp/product/B00EQJ7I7Y/ref=ox_sc_act_title_34?smid=A36WYPVC7GS8LV&psc=1",
    substitute: "yes, smaller is fine"
  },
  {
    id: "dog-car-seat",
    category: "puppy",
    name: "dog car seat",
    price: "39.99",
    link: "https://www.amazon.com/gp/product/B0F62D59YC/ref=ox_sc_act_title_35?smid=A36ENI9A08WZH5&psc=1",
    substitute: "yes, purple please!"
  },
  {
    id: "snuffle-ball-enrichment-toy-for-feeding-pink-color",
    category: "puppy",
    name: "snuffle ball (enrichment toy for feeding) pink color",
    price: "18.99",
    link: "https://www.amazon.com/gp/product/B0FRF3TXQ9/ref=ox_sc_act_title_36?smid=A3W3IBGV8YGQ1E&psc=1",
    substitute: "yes, anything purple or girly colored!"
  },
  {
    id: "puppy-sling",
    category: "puppy",
    name: "puppy sling",
    price: "22.79",
    link: "https://www.amazon.com/gp/product/B0DM762CPF/ref=ox_sc_act_title_37?smid=A1P8WVKSHTPC23&psc=1",
    substitute: "yes, neutral colors are fine"
  },
  {
    id: "puppy-camera",
    category: "puppy",
    name: "puppy camera",
    price: "17.96",
    link: "https://www.amazon.com/gp/product/B0829KDY9X/ref=ox_sc_act_title_38?smid=ATVPDKIKX0DER&psc=1",
    substitute: "yes, as long as I can check it on an app and be notified when motion/noise happens"
  },
  {
    id: "silicone-molds-for-dog-treat-making-lol",
    category: "puppy",
    name: "silicone molds for dog treat making lol",
    price: "6.99",
    link: "https://www.amazon.com/gp/product/B09YVDZ1ZB/ref=ox_sc_act_title_39?smid=A1F252LXQMPVLE&psc=1",
    substitute: "yes, just liked the shapes"
  },
  {
    id: "can-food-covers",
    category: "puppy",
    name: "can food covers",
    price: "4.99",
    link: "https://www.amazon.com/gp/product/B0CKJ846FX/ref=ox_sc_act_title_40?smid=A5OWUZN63LCYI&psc=1",
    substitute: "yes"
  },
  {
    id: "dog-food-storage-container",
    category: "puppy",
    name: "dog food storage container",
    price: "36.99",
    link: "https://www.amazon.com/gp/product/B0D91Z2C8Y/ref=ox_sc_act_title_39?smid=A1ULJAXH82XL3A&psc=1",
    substitute: "yes, if its cuter I would prefer that more actually"
  },
  {
    id: "dog-toothbrush-purple",
    category: "puppy",
    name: "dog toothbrush purple",
    price: "7.99",
    link: "https://www.amazon.com/gp/product/B0DDKRH31Z/ref=ox_sc_act_title_40?smid=AZO4V03D90N0Z&psc=1",
    substitute: "no"
  },
  {
    id: "purple-kong-small",
    category: "puppy",
    name: "purple kong (small)",
    price: "7.46",
    link: "https://www.amazon.com/gp/product/B000S6PQX2/ref=ox_sc_act_title_43?smid=AQ9D9YX2TEHKA&psc=1",
    substitute: "no"
  },
  {
    id: "purple-dog-blankets",
    category: "puppy",
    name: "purple dog blankets",
    price: "12.99",
    link: "https://www.amazon.com/gp/product/B09HGYM5PG/ref=ox_sc_act_title_44?smid=A2XYQQ9DEOUCVU&psc=1",
    substitute: "yes, just wanted 3+ purple ones"
  },
  {
    id: "dog-bed-purple",
    category: "puppy",
    name: "dog bed purple",
    price: "18.99",
    link: "https://www.amazon.com/gp/product/B0FF4KZKV1/ref=ox_sc_act_title_45?smid=A35NXX618O7W53&psc=1",
    substitute: "yes, just wanted purple"
  }
];

const categories = ["apartment", "puppy", "misc"];
const boughtInputs = new Map();

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(price));
}

function renderDetail(label, value) {
  const displayValue = value || "TBD";
  return `
    <div>
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(displayValue)}</dd>
    </div>
  `;
}

function renderLink(item) {
  return `
    <div>
      <dt>Link</dt>
      <dd><a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">View item</a></dd>
    </div>
  `;
}

function renderItem(item) {
  const card = document.createElement("article");
  card.className = "wishlist-card";
  card.innerHTML = `
    <div class="wishlist-card-header">
      <div>
        <p class="item-category">${escapeHtml(item.category)}</p>
        <h3>${escapeHtml(item.name)}</h3>
      </div>
      <p class="item-price">${formatPrice(item.price)}</p>
    </div>

    <dl class="item-details">
      ${renderLink(item)}
      ${renderDetail("Can be substituted", item.substitute)}
    </dl>

    <label class="bought-check">
      <input type="checkbox" name="${escapeHtml(item.id)}-bought" data-item-id="${escapeHtml(item.id)}">
      <span>Someone has already bought this</span>
    </label>
  `;

  boughtInputs.set(item.id, card.querySelector("input"));
  return card;
}

function renderWishlist() {
  categories.forEach((category) => {
    const list = document.querySelector(`[data-category-list="${category}"]`);
    if (!list) return;

    const items = wishlistItems.filter((item) => item.category === category);
    list.innerHTML = "";

    if (!items.length) {
      list.closest(".wishlist-section").classList.add("empty-section");
      return;
    }

    list.closest(".wishlist-section").classList.remove("empty-section");
    items.forEach((item) => list.append(renderItem(item)));
  });
}

function setInputsEnabled(isEnabled) {
  boughtInputs.forEach((input) => {
    input.disabled = !isEnabled;
  });
}

function updateBoughtState(itemId, isBought) {
  const input = boughtInputs.get(itemId);
  if (!input) return;

  input.checked = Boolean(isBought);
  input.closest(".wishlist-card").classList.toggle("is-bought", Boolean(isBought));
}

async function connectFirebase() {
  const config = window.WISHLIST_FIREBASE_CONFIG;
  const hasConfig = config && config.apiKey && config.databaseURL && config.projectId && config.appId;
  if (!hasConfig) return null;

  const [{ initializeApp }, database] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js")
  ]);

  const app = initializeApp(config);
  const db = database.getDatabase(app);

  return {
    listen(itemId, callback) {
      database.onValue(database.ref(db, `wishlist/${itemId}/bought`), (snapshot) => {
        callback(snapshot.val() === true);
      });
    },
    setBought(itemId, isBought) {
      return database.set(database.ref(db, `wishlist/${itemId}/bought`), isBought);
    }
  };
}

async function initializeBoughtSync() {
  setInputsEnabled(false);

  const databaseApi = await connectFirebase();
  if (!databaseApi) {
    document.body.classList.add("wishlist-sync-unconfigured");
    return;
  }

  boughtInputs.forEach((input, itemId) => {
    databaseApi.listen(itemId, (isBought) => updateBoughtState(itemId, isBought));
    input.addEventListener("change", () => {
      databaseApi.setBought(itemId, input.checked).catch(() => {
        input.checked = !input.checked;
      });
    });
  });

  setInputsEnabled(true);
}

renderWishlist();
initializeBoughtSync();
