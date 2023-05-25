import useData from "./useData";

interface PlatForm {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useData<PlatForm>('platforms/lists/parents');

export default usePlatform;