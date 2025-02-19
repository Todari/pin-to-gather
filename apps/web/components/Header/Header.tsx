// import { Input, VStack } from "@pin-to-gather/ui";
// import { useState } from "react";
// import { useRequestGetLocalSearch } from "../../hooks/useRequestGetLocalSearch";
// import { LocaleSearchItem } from "@components/LocaleSearchItem/LocaleSearchItem";

// export function Header() {
//   const [query, setQuery] = useState<string>("");

//   const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   }

//   const {data, isLoading} = useRequestGetLocalSearch(query);

//   // console.log(data);

//   return <VStack>
//   <Input value={query} onChange={handleChangeQuery} />
//   <VStack>
//     {data?.items.map((item) => (
//       <LocaleSearchItem item={item} />
//     ))}
//   </VStack>
//   </VStack>;
// }
