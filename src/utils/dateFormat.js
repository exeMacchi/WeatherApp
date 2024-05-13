import { format } from "date-fns"
import { es } from "date-fns/locale";

const formatFullDate = (dateAPI) => {
    const date = new Date(dateAPI);
    // Esto es necesario para que muestre de forma correcta.
    const utcDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    const fullDate = format(utcDate, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: es });
    return fullDate.charAt(0).toUpperCase() + fullDate.slice(1);
}

const formatDayOfWeek = (dateAPI) => {
    const date = new Date(dateAPI);
    // Esto es necesario para que muestre de forma correcta.
    const utcDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    const dayOfWeek = format(utcDate, "EEEE", { locale: es });
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
}


export { formatFullDate, formatDayOfWeek };
