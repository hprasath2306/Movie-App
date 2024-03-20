import { fetchMovie } from "@/api/movies";
import { addMovieToWatchList } from "@/api/watchlist";
import { FontAwesome } from "@expo/vector-icons";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, Image, Pressable, TouchableOpacity } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const client = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(id),
  });

  const {mutate} = useMutation({
    mutationFn: () => addMovieToWatchList(id),
    onSuccess: () => {
      client.invalidateQueries(['watchlist'])
    }
  })

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Stack.Screen options={{ title: data.title }} />
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + data.backdrop_path }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "500", marginVertical: 10 }}>
          {data.title}
        </Text>
        <View style={{marginVertical:10}}>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center', gap:5}} onPress={() => mutate()}>
            <FontAwesome name="bookmark-o" size={24} color={"black"} />
            <Text>Add to watchlist</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16 }}>{data.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
