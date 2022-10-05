import { extendTheme } from "@chakra-ui/react"

const colors = {
  primary: {
    main: '#3F88C5',
    secondary: '#ffba08',
    mint: '#51dd97',
    purple: '#673ab7',
    lightBlue: '#0693e3',
    orangeYellow: '#ffce00',
    dark: '#3f3f3f',
    100: "#CFD1FD",
    200: "#A7ABFB",
    300: "#8388F9",
    400: "#6268F8",
    500: "#444BF7",
    600: "#262EF6",
    700: "#0B14F5",
    800: "#0911DD",
    900: "#080FC7",
  },
}

const CustomTheme = extendTheme({ colors })

export default CustomTheme