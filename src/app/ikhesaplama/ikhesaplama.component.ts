import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MyprojectApiService } from '../myproject-api.service';

@Component({
  selector: 'app-ikhesaplama',
  templateUrl: './ikhesaplama.component.html',
  styleUrls: ['./ikhesaplama.component.scss'],
})
export class IKHesaplamaComponent implements OnInit {
  getKrediHesaplamaListesi$!: Observable<any[]>;
  isShown: boolean = false;
  planShown: boolean = false;

  i: number = 1;
  x: number = 0;
  a = Array();
  new = Array();
  tt = Array();
  c: number = 1;
  hesap: any;

  constructor(
    private service: MyprojectApiService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  @Input() hesap2: any;
  id: number = 0;
  kredi: string = 'İhtiyaç Kredisi';
  tutar: number = 3000;
  vade: number = 3;
  faiz: number = 2;

  ngOnInit(): void {
    this.getKrediHesaplamaListesi$ = this.service.getKrediHesaplamaListesi();
    this.id = this.hesap.id;
    this.kredi = this.hesap.kredi;
    this.tutar = this.hesap.tutar;
    this.vade = this.hesap.vade;
    this.faiz = this.hesap.faiz;
  }

  addHesaplama() {
    this.isShown = !this.isShown;
    var hesap = {
      kredi: this.kredi,
      tutar: this.tutar,
      vade: this.vade,
      faiz: this.faiz,
    };
    this.service.addHesaplama(hesap).subscribe();
  }
  openPlan(): void {
    this.planShown = !this.planShown;
  }

  taksit(): any {
    let aylıktaksit = Math.round(
      this.tutar /
        ((Math.pow(1.02, this.vade) - 1) / (Math.pow(1.02, this.vade) * 0.02))
    );
    this.tt.push(aylıktaksit);
    return this.tt[0];
  }

  borc(): Number {
    return Math.round(
      Math.round(
        this.tutar /
          ((Math.pow(1.02, this.vade) - 1) / (Math.pow(1.02, this.vade) * 0.02))
      ) * this.vade
    );
  }

  FaizArray = Array();
  KKDFarray = Array();
  BSMVarray = Array();
  AnaparaArray = Array();
  KalanAnaParaArray = Array();
  
  itfa(): any {
    while (this.c <= this.vade) {
      let faiztutarı = Math.round(this.tutar * (2 / 100));    
      let KKDF = Math.round(faiztutarı * (15 / 100));
      let BSMV = Math.round(faiztutarı * (5 / 100));
      let anapara = Math.round(this.tt[0] - (faiztutarı + KKDF + BSMV));
      this.tutar = Math.round(this.tutar - anapara);
      
      this.new.push(this.c);
      this.FaizArray.push(faiztutarı);
      this.KKDFarray.push(KKDF);
      this.BSMVarray.push(BSMV);
      this.AnaparaArray.push(anapara);
      this.KalanAnaParaArray.push(this.tutar);

      console.log(this.new);
      this.c++;
    }
  }
}
