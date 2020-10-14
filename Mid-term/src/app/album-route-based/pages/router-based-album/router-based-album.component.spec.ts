import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBasedAlbumComponent } from './router-based-album.component';

describe('RouterBasedAlbumComponent', () => {
  let component: RouterBasedAlbumComponent;
  let fixture: ComponentFixture<RouterBasedAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterBasedAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterBasedAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
