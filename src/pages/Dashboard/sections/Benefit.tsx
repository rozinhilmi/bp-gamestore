import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { primaryTextColor } from "../../../utils/constant/theme";

const Benefit = () => {
  const benefit: any = [
    {
      title: "Dapatkan produk dengan harga terbaik",
      description:
        "Produk yang kami tawarkan menyediakan harga terbaik dan bersaing di layanan service topup di Indonesia. Kami juga menyediakan berbagai macam promo yang dapat anda dapatkan pada event atau tanggal tertentu.",
      src: "Mobile Legend.webp",
    },
    {
      title: "Bantuan dan layanan tim teknis selalu sigap",
      description:
        "Bantuan dan layanan bagi anda pelanggan ataupun pengguna Bisnis Vocagame yang siaga mengatasi permasalahan yang anda hadapi. Tim teknis, customer service akan selalu ada membantu anda kapan saja dan dimana saja.",
      src: "Pubg Mobile.webp",
    },
    {
      title: "Produk kredit game sangat bervariatif",
      description:
        "Selain memberikan harga yang murah, kami memberikan banyak sekali variasi produk yang ditawarkan. Dengan produk yang bervariatif, anda dapat meningkatkan pengguna ataupun penjualan bersama kami!",
      src: "Free Fire.webp",
    },

    {
      title: "Dapatkan informasi realtime kapan saja",
      description:
        "Mulai dari laporan status transaksi sampai pendapatan diterima secara real-time di genggaman tangan. Dengan informasi laporan status transaksi sampai pendapatan, anda dapat menganalisis pelanggan yang anda punya",
      src: "Fifa Mobile.webp",
    },
    {
      title: "Integrasi dengan Bisnis VocaGame",
      description:
        "Untuk anda yang sudah mempunyai web store, anda dapat menghubungkan toko anda menggunakan Open API. Anda dapat menghubungi tim teknis kami untuk bekerja sama dalam proses integrasi web anda bersama API kami.",
      src: "AOV.webp",
    },
    {
      title: "Menyediakan Beragam Metode Pembayaran",
      description:
        "Layanan Bisnis VocaGame menyediakan berbagai macam metode pembayaran yang sangat luas!. Dengan begitu, anda dapat membayar deposit dengan mudah kapan saja dan dimana saja di Bisnis Vocagame.",
      src: "COD Mobile.webp",
    },
  ];
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      margin={"20px"}
      borderRadius={"12px"}
      id="Benefit"
      scrollBehavior={"smooth"}
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "3xl" }}
        color={primaryTextColor}
        textAlign={"center"}
      >
        Mengapa Memilih Kami
      </Text>

      <Stack gap={"50px"} my={"30px"}>
        {benefit.map((item: any, index: number) => (
          <HStack
            justifyContent={"space-between"}
            key={index}
            flexDirection={{
              base: "column-reverse",
              md: index % 2 !== 0 ? "row-reverse" : "row",
            }}
            gap={"30px"}
          >
            <Stack width={{ base: "100%", xl: "50%" }}>
              <Text
                color={primaryTextColor}
                as={"b"}
                fontSize={{ base: "2xl", xl: "4xl" }}
              >
                {item.title}
              </Text>
              <Text color={primaryTextColor}>{item.description}</Text>
            </Stack>

            <Stack width={{ base: "100%", xl: "50%" }}>
              <Image
                zIndex={"1"}
                padding={"10px"}
                backgroundColor={"whiteAlpha.300"}
                borderRadius={"5px"}
                bottom={"2cm"}
                left={"2cm"}
                objectFit={"contain"}
                width={"220px"}
                alignSelf={"center"}
                src={`/assets/Products/${item.src}`}
              />
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Benefit;
