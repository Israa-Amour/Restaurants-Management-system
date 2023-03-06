import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersPaymentDetailsComponent } from './orders-payment-details.component';

describe('OrdersPaymentDetailsComponent', () => {
  let component: OrdersPaymentDetailsComponent;
  let fixture: ComponentFixture<OrdersPaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPaymentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
