import { Component, OnInit } from '@angular/core';
//reactive formlar ile çalışma
//builder :=> service ilişkilendirme noktası
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
this.productAddForm=this.formBuilder.group({  //ürün eklerken olmasnı istedigimiz alan lar
productName:["",Validators.required],
unitPrice:["",Validators.required],
unitsInStock:["",Validators.required],
categoryId:["",Validators.required]
})
  }

  add(){
    if(this.productAddForm.valid){
      let productModel= Object.assign({},this.productAddForm.value) 
      this.productService.add(productModel).subscribe(data=>{
        console.log(data)
        this.toastrService.success("Ürün ekleme başarılı","Başarılı")
      })
  
    }
    else{
       this.toastrService.error("Form Eksik","Dikkat")
    }

  }

}
