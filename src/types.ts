export type ProductAncestorsType = {
  slug: string;
  externalId: string;
  name: string;
  depth: number;
};

export type ProductType = {
  id: string;
  legacyId: string;
  legacyVariantId: string;
  cultureCode: string;
  isDefaultVariant: boolean;
  sku: string;
  productName: string;
  slug: string;
  averageRating: number;
  reviewsCount: number;
  questionsCount: number;
  image: {
    externalId: string;
    url: string;
    priority: number;
    isDefault: boolean;
    attributes: {
      imageAltText: string;
    };
  };
  stockStatus: {
    status: string;
  };
  price: {
    currencyCode: string;
    priceIncTax: number;
    priceExcTax: number;
    isOnPromotion: boolean;
  };
  attributes: {
    isApproved: boolean;
    isShownOnTv: boolean;
    isBestSeller: boolean;
    isFreeWaste: boolean;
    isPremium: boolean;
    isRecommended: boolean;
    isTrayIncluded: boolean;
    isBluetoothIncluded: boolean;
    isBatteryIncluded: boolean;
    isAntiSlipIncluded: boolean;
    isShortProjection: boolean;
    hasOneOutlet: boolean;
    hasTwoOutlets: boolean;
    hasThreeOutlets: boolean;
    isNew: boolean;
    hasMoreOptions: boolean;
  };
  defaultCategory: {
    externalId: string;
    slug: string;
    name: string;
    isDefault: boolean;
    ancestors: ProductAncestorsType[];
  };
  brand: {
    externalId: string;
    slug: string;
    name: string;
    brandImage: {
      externalId: string;
      url: string;
      priority: number;
      isDefault: boolean;
      attributes: {
        imageAltText: string;
      };
    };
  };
  score: number;
};
