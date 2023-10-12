import { useEffect, useState } from "react";
import { ContentDTO, ContentsDTO } from "../types/dto";
import axios from "axios";

const useContents = () => {
  const [posts, setPosts] = useState<ContentDTO[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<ContentsDTO>(
          "https://api.learnhub.thanayut.in.th/content"
        );

        setPosts(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, isLoading };
};

export default useContents;
