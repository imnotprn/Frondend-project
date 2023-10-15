import { useEffect, useState } from "react";
import { ContentsDTO, CreateContentDTO } from "../types/dto";
import axios from "axios";

const useContents = () => {
  const token = localStorage.getItem("token");
  const [contents, setContents] = useState<ContentsDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPosting, setPosting] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<ContentsDTO>(
          "https://api.learnhub.thanayut.in.th/content"
        );

        console.log(res.data);
        setContents(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const createPost = async (
    newUrl: string,
    newComment: string,
    newRating: number
  ) => {
    const newPost: CreateContentDTO = {
      videoUrl: newUrl,
      comment: newComment,
      rating: newRating,
    };

    setPosting(true);
    try {
      const res = await axios.post<CreateContentDTO>(
        "https://api.learnhub.thanayut.in.th/content",
        newPost,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setPosting(false);
    }
  };

  return { contents, isLoading, isPosting, createPost };
};

export default useContents;
