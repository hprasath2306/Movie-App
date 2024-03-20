import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { View } from "@/components/Themed";
import { TopRatedMovies } from "@/api/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";

export default function TabOneScreen() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({pageParam}) => TopRatedMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam:(lastPage, pages) => pages.length + 1,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    <View>
      <Text>{error.message}</Text>
    </View>;
  }

  const movies = data?.pages?.flat();

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{gap:5, padding:5}}
        columnWrapperStyle={{gap:5}}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
