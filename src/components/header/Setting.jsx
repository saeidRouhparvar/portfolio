import { Box,useColorMode } from '@chakra-ui/react'

const Setting = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
    {colorMode === "light" ? (
      <Box p={"10px"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.64 17L4.93 17.71C4.74375 17.8974 4.63921 18.1508 4.63921 18.415C4.63921 18.6792 4.74375 18.9326 4.93 19.12C5.11736 19.3063 5.37081 19.4108 5.635 19.4108C5.89919 19.4108 6.15264 19.3063 6.34 19.12L7.05 18.41C7.21383 18.2187 7.29943 17.9726 7.28971 17.7209C7.27999 17.4693 7.17566 17.2305 6.99756 17.0524C6.81947 16.8743 6.58073 16.77 6.32905 16.7603C6.07738 16.7506 5.8313 16.8362 5.64 17ZM5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12ZM12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5ZM5.64 7.05C5.82626 7.23474 6.07766 7.3389 6.34 7.34C6.47161 7.34076 6.60207 7.31554 6.72391 7.26577C6.84574 7.21601 6.95656 7.14268 7.05 7.05C7.23625 6.86264 7.34079 6.60919 7.34079 6.345C7.34079 6.08081 7.23625 5.82736 7.05 5.64L6.34 4.93C6.1487 4.76617 5.90262 4.68057 5.65095 4.69029C5.39927 4.70001 5.16053 4.80434 4.98244 4.98244C4.80434 5.16053 4.70001 5.39927 4.69029 5.65095C4.68057 5.90262 4.76617 6.1487 4.93 6.34L5.64 7.05ZM17.64 7.34C17.9023 7.3389 18.1537 7.23474 18.34 7.05L19.05 6.34C19.1547 6.25035 19.2397 6.14004 19.2997 6.01597C19.3597 5.89191 19.3935 5.75677 19.3988 5.61905C19.4041 5.48133 19.3809 5.344 19.3306 5.21568C19.2804 5.08735 19.2041 4.9708 19.1066 4.87335C19.0092 4.77589 18.8926 4.69964 18.7643 4.64936C18.636 4.59909 18.4987 4.57588 18.3609 4.5812C18.2232 4.58652 18.0881 4.62025 17.964 4.68027C17.84 4.7403 17.7296 4.82532 17.64 4.93L17 5.64C16.8137 5.82736 16.7092 6.08081 16.7092 6.345C16.7092 6.60919 16.8137 6.86264 17 7.05C17.1763 7.22536 17.4116 7.32875 17.66 7.34H17.64ZM21 11H20C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19ZM18.36 17C18.17 16.8943 17.9508 16.8534 17.7355 16.8835C17.5202 16.9136 17.3205 17.0131 17.1668 17.1668C17.0131 17.3205 16.9136 17.5202 16.8835 17.7355C16.8534 17.9508 16.8943 18.17 17 18.36L17.71 19.07C17.8974 19.2563 18.1508 19.3608 18.415 19.3608C18.6792 19.3608 18.9326 19.2563 19.12 19.07C19.3063 18.8826 19.4108 18.6292 19.4108 18.365C19.4108 18.1008 19.3063 17.8474 19.12 17.66L18.36 17ZM12 6.5C10.9122 6.5 9.84883 6.82257 8.94436 7.42692C8.03989 8.03126 7.33494 8.89025 6.91866 9.89524C6.50238 10.9002 6.39346 12.0061 6.60568 13.073C6.8179 14.1399 7.34172 15.1199 8.11091 15.8891C8.8801 16.6583 9.86011 17.1821 10.927 17.3943C11.9939 17.6065 13.0998 17.4976 14.1048 17.0813C15.1098 16.6651 15.9687 15.9601 16.5731 15.0556C17.1774 14.1512 17.5 13.0878 17.5 12C17.4974 10.5421 16.917 9.14471 15.8862 8.11383C14.8553 7.08295 13.4579 6.50264 12 6.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5Z"
            fill="#2A2A2A"
          />
        </svg>
      </Box>
    ) : (
      <Box p={"10px"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6399 13C21.4955 12.8807 21.3206 12.8043 21.135 12.7795C20.9493 12.7548 20.7605 12.7827 20.5899 12.86C19.5325 13.3439 18.3828 13.5929 17.2199 13.59C15.0687 13.5874 13.0059 12.7344 11.481 11.2171C9.9562 9.69976 9.09309 7.64111 9.07989 5.49C9.08445 4.81583 9.16836 4.14454 9.32989 3.49C9.36417 3.31554 9.35131 3.13509 9.29265 2.96725C9.23398 2.79941 9.13163 2.65025 8.99613 2.53513C8.86064 2.42001 8.6969 2.3431 8.52179 2.31231C8.34668 2.28153 8.16652 2.29799 7.99989 2.36C6.43222 3.06491 5.06946 4.15676 4.03965 5.53298C3.00984 6.9092 2.34677 8.52462 2.11274 10.2275C1.87871 11.9303 2.0814 13.6647 2.70176 15.2678C3.32213 16.8708 4.3398 18.2898 5.65919 19.3915C6.97858 20.4932 8.55637 21.2414 10.2443 21.5658C11.9323 21.8903 13.675 21.7803 15.3088 21.2462C16.9426 20.7122 18.4139 19.7716 19.5843 18.5128C20.7547 17.254 21.586 15.7183 21.9999 14.05C22.0503 13.859 22.043 13.6573 21.979 13.4705C21.9149 13.2836 21.7969 13.1199 21.6399 13ZM12.1399 19.69C10.4617 19.6782 8.82809 19.1479 7.46288 18.1717C6.09767 17.1956 5.06756 15.8213 4.51357 14.2371C3.95959 12.6529 3.90883 10.9362 4.36823 9.322C4.82763 7.70782 5.77475 6.2751 7.07989 5.22V5.49C7.08254 8.17848 8.15171 10.7561 10.0528 12.6571C11.9538 14.5582 14.5314 15.6274 17.2199 15.63C17.9258 15.6326 18.6299 15.5588 19.3199 15.41C18.6298 16.7155 17.5964 17.8078 16.331 18.5691C15.0657 19.3304 13.6166 19.7318 12.1399 19.73V19.69Z"
            fill="#E7E7E7"
          />
        </svg>
      </Box>
    )}
  </Box>
  )
}

export default Setting