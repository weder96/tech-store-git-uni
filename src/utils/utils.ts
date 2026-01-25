import moment from "moment";

export const formatedDate =(inputDate:string) => {
    return moment(inputDate).format('DD-MM-YYYY HH:mm:ss');
}



export const imgUrl = (fileName: string) => {  
    console.log('fileName', fileName)
    const namepng = fileName.split("?")[0]
    const imgUrl = new URL('../assets/'+namepng, import.meta.url).href
    return imgUrl
}


export const getIconPrime = (product: string) => {   
    const ing : string[] = ["mouses", "mousepads", "keyboards", "headphones", "monitors","speakers"];
    const pt : string[] = ["mouses", "mousepads", "keyboards", "headphones", "monitors","speakers"];
    const index = pt.indexOf(product);
    console.log('url :',product)

    if (index !== -1)
      return ing[index]
    return "mouses";
  }