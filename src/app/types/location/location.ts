export interface locationProps  {
    id: number,
    city: string,
    focusOn: string,
    whyChooseUs: string,         
    rating: number, 
    featureImage : string,
    features: string[],
    viewMode?: "grid" | "list"
  }
  