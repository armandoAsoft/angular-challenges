import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styles: `
    @reference "tailwindcss";

    section {
      @apply flex flex-1 flex-col gap-5;
    }

    .list-item {
      @apply flex flex-row border-b px-5 pb-2;

      span {
        @apply flex-1;
      }
    }
  `,
  animations: [
    trigger('fadeRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(80px)' }),
        animate(
          '1s ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
    trigger('fadeLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-80px)' }),
        animate(
          '1s ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
    trigger('fadeDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-80px)' }),
        animate(
          '1s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="mx-20 my-40 flex gap-5">
      <section>
        <div @fadeRight>
          <h3>2008</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div @fadeLeft>
          <h3>2010</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div @fadeRight>
          <h4>2012</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>
      </section>

      <section @fadeDown>
        <div class="list-item">
          <span>Name:</span>
          <span>Samuel</span>
        </div>

        <div class="list-item">
          <span>Age:</span>
          <span>28</span>
        </div>

        <div class="list-item">
          <span>Birthdate:</span>
          <span>02.11.1995</span>
        </div>

        <div class="list-item">
          <span>City:</span>
          <span>Berlin</span>
        </div>

        <div class="list-item">
          <span>Language:</span>
          <span>English</span>
        </div>

        <div class="list-item">
          <span>Like Pizza:</span>
          <span>Hell yeah</span>
        </div>
      </section>
    </div>
  `,
})
export class AppComponent {
  // enterRightAnimation = signal('slide-fade-right');
  // enterLeftAnimation = signal('slide-fade-left');
}
